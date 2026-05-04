import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет письмо на почту владельца."""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    contact = body.get("contact", "").strip()
    task = body.get("task", "").strip()

    if not contact:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": {"error": "Поле contact обязательно"},
        }

    smtp_host = os.environ.get("SMTP_HOST", "smtp.mail.ru")
    smtp_port = int(os.environ.get("SMTP_PORT", "465"))
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]
    to_email = os.environ["LEAD_EMAIL"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Новая заявка с сайта VIZI Studio"
    msg["From"] = smtp_user
    msg["To"] = to_email

    text_body = f"""Новая заявка с сайта VIZI Studio

Контакт: {contact}

Задача / описание:
{task or '—'}
"""

    html_body = f"""
<div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #111;">
  <h2 style="margin-bottom: 4px;">Новая заявка с сайта</h2>
  <p style="color: #666; margin-top: 0;">VIZI Studio</p>
  <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
  <table style="width:100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; color: #888; width: 120px; vertical-align: top;">Контакт</td>
      <td style="padding: 8px 0; font-weight: 600;">{contact}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #888; vertical-align: top;">Задача</td>
      <td style="padding: 8px 0;">{task or '—'}</td>
    </tr>
  </table>
</div>
"""

    msg.attach(MIMEText(text_body, "plain", "utf-8"))
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
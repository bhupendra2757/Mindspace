# Generated by Django 4.1.3 on 2022-11-11 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Counsellor",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("update_at", models.DateTimeField(auto_now=True)),
                ("name", models.CharField(max_length=255, verbose_name="Name")),
                (
                    "contact",
                    models.CharField(max_length=10, verbose_name="phone number"),
                ),
                (
                    "address",
                    models.CharField(
                        help_text="Please enter your current location.",
                        max_length=255,
                        verbose_name="location",
                    ),
                ),
                (
                    "email",
                    models.EmailField(
                        error_messages={
                            "unique": "A user with that email already exists."
                        },
                        max_length=254,
                        unique=True,
                        verbose_name="Email",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]

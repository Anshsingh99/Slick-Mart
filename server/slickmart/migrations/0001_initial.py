# Generated by Django 4.1.7 on 2023-07-06 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
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
                ("name", models.CharField(max_length=50)),
                ("img_url", models.CharField(max_length=500)),
                ("description", models.TextField()),
                ("price", models.CharField(max_length=10)),
            ],
        ),
    ]

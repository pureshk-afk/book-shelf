# Generated by Django 5.0.1 on 2024-01-03 20:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authsystem', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_seller',
        ),
    ]
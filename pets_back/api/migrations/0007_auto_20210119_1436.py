# Generated by Django 3.1.4 on 2021-01-19 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20210119_1343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='text',
            field=models.CharField(blank=True, max_length=1024),
        ),
    ]

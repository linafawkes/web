# Generated by Django 3.1.4 on 2021-01-19 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210118_2325'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='image',
            field=models.ImageField(blank=True, upload_to='E:/git/pets/pets_back/media'),
        ),
    ]

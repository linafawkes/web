# Generated by Django 3.1.4 on 2021-01-18 15:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=64)),
            ],
        ),
        migrations.AddField(
            model_name='service',
            name='image',
            field=models.ImageField(default=1, upload_to='E:/git/cw2/pets_back/media'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='service',
            name='text',
            field=models.CharField(default=1, max_length=1024),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='service',
            name='tags',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.tag'),
            preserve_default=False,
        ),
    ]
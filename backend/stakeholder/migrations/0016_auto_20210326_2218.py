# Generated by Django 3.0.5 on 2021-03-26 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stakeholder', '0015_merge_20210326_2215'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user_details',
            name='email',
        ),
        migrations.AddField(
            model_name='user_details',
            name='refresh_token',
            field=models.CharField(default=None, max_length=1000),
        ),
        migrations.AlterField(
            model_name='user_details',
            name='access_token',
            field=models.CharField(default=None, max_length=1000),
        ),
    ]
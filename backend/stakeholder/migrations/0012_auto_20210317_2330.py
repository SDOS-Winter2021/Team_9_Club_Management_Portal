# Generated by Django 3.0.5 on 2021-03-17 18:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stakeholder', '0011_auto_20210317_2304'),
    ]

    operations = [
        migrations.RenameField(
            model_name='club_general',
            old_name='corrdinator1_email',
            new_name='coordinator1_email',
        ),
        migrations.RenameField(
            model_name='club_general',
            old_name='corrdinator2_email',
            new_name='coordinator2_email',
        ),
        migrations.RenameField(
            model_name='club_general',
            old_name='corrdinator3_email',
            new_name='coordinator3_email',
        ),
    ]
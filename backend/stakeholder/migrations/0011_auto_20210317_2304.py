# Generated by Django 3.0.5 on 2021-03-17 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stakeholder', '0010_auto_20210313_2034'),
    ]

    operations = [
        migrations.CreateModel(
            name='USER_DETAILS',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('access_token', models.CharField(max_length=1000)),
                ('google_id', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.RenameField(
            model_name='club_general',
            old_name='fB_link',
            new_name='fb_link',
        ),
        migrations.RenameField(
            model_name='club_general',
            old_name='iG_link',
            new_name='ig_link',
        ),
        migrations.AddField(
            model_name='club',
            name='poster',
            field=models.ImageField(blank=True, upload_to='club/posters'),
        ),
    ]

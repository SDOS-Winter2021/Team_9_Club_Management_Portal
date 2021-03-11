# Generated by Django 3.0.5 on 2021-03-10 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Club_Events',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Time', models.DateTimeField()),
                ('Location', models.URLField(max_length=500)),
                ('Description', models.TextField()),
                ('Payment_receipt', models.ImageField(upload_to='clubs/payment_receipt')),
                ('Approved', models.BooleanField(default=False)),
                ('Attendance', models.IntegerField(default=0)),
            ],
        ),
    ]

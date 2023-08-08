from django.contrib import admin
from .models import Content, ContentCategory, TodayPick, Interview, QnA

# Register your models here.
admin.site.register(Content)
admin.site.register(ContentCategory)

class TodayPickAdmin(admin.ModelAdmin):
    readonly_fields = ['date']

    def save_model(self, request, obj, form, change):
        # Check if there is an existing TodayPick instance
        existing_today_pick = TodayPick.objects.first()

        # If an existing instance exists, delete it
        if existing_today_pick:
            existing_today_pick.delete()

        # Save the current instance
        obj.save()


class QnAInline(admin.StackedInline):
    model = QnA
    extra = 1

class InterviewAdmin(admin.ModelAdmin):
    inlines = [QnAInline]
    

admin.site.register(TodayPick, TodayPickAdmin)
admin.site.register(Interview, InterviewAdmin)
admin.site.register(QnA)

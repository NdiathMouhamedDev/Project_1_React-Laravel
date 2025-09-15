<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use App\Models\Event;

class EventSubscribed extends Notification
{
    use Queueable;

    protected $event;

    public function __construct(Event $event)
    {
        $this->event = $event;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('Inscription à un événement')
                    ->line("Vous êtes inscrit à l'événement : {$this->event->title}")
                    ->line("Date : {$this->event->date}")
                    ->line("Lieu : {$this->event->location}");
    }
}

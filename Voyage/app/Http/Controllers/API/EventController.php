<?php

namespace App\Http\Controllers\API;

use App\Notifications\EventSubscribed;
use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    // Récupérer tous les événements
    public function index()
    {
        return response()->json(Event::all());
    }

    // Créer un événement
    public function store(Request $request)
    {

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date' => 'required|date',
            'location' => 'required|string|max:255',
        ]);

        $event = Event::create($validated);
        $this->authorize('create', Event::class);

        return response()->json($event, 201);
    }

    // Afficher un événement par son id
    public function show($id)
    {
        $event = Event::findOrFail($id);
        return response()->json($event);
    }

    // Mettre à jour un événement
    public function update(Request $request, $id)
    {
        $event = Event::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'date' => 'sometimes|required|date',
            'location' => 'sometimes|required|string|max:255',
        ]);

        $event->update($validated);
        $this->authorize('update', $event); 

        return response()->json($event);
    }

    // Supprimer un événement
    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        $this->authorize('delete', $event);

        return response()->json(['message' => 'Événement supprimé avec succès']);
    }

    // S'inscrire à un événement
    public function subscribe($eventId)
    {
        $event = Event::findOrFail($eventId);
        $user = auth()->user();

        $user->events()->syncWithoutDetaching([$event->id]);
        $user->notify(new EventSubscribed($event));

        return response()->json(['message' => 'Inscription réussie']);
    }

// Se désinscrire d'un événement
    public function unsubscribe($eventId)
    {
        $event = Event::findOrFail($eventId);
        $user = auth()->user();

        $user->events()->detach($event->id);

        return response()->json(['message' => 'Désinscription réussie']);
    }

    

}

<?php 

use App\Http\Controllers\API\EventController;
use Illuminate\Routing\Route;

// Génère toutes les routes CRUD automatiquement
Route::apiResource('events', EventController::class);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/events/{id}/subscribe', [EventController::class, 'subscribe']);
    Route::delete('/events/{id}/unsubscribe', [EventController::class, 'unsubscribe']);
});

<?php
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactVerificationController extends Controller
{
    public function verify(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'message' => 'required|string|max:500',
        ]);
        return back()->with('success', 'Votre message a été envoyé avec succès !');
    }   

}
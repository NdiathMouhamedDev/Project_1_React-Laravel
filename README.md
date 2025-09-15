# Application web avec React & Laravel

## Sujet 1: Application pour l'evenement du voyage vers Touba

### Structure du Projet
On a adopté la structure monolithe

### Relation
on a quatre table users, events, contact, event_users, 
structure contact:
    id | date_creation| email | message
structure users:
    id| date_creation | email | name | password | email_verified_at | created_at | updated_at | 
structure events:
    id | date_creation | title | description | location | created_at | updated_at | 
structure event_users:
   id | id_event | id_user | status | created_at |
  
   
 un n'importe quel utilisateurs peut prendre contact (envoie commentaire mail) (n/n)
 un utilisateur ne peut s'interessé plusieurs fois à un meme evenement (1/1)
 un utilisateur peut s'interessé à plusieurs evenement (1/n)
 un utilisateur admin peut crée modifier et supprimer un evenement qu'il a crée (1/n)
 un evenement peut avoir l'interét de plusieurs utilisateur (1/n)

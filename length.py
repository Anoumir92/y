mot_de_passe_attendu = "main+=[(=,+)]"

# Demande à l'utilisateur de saisir le mot de passe
mot_de_passe_utilisateur = input("Entrez le mot de passe : ")

# Vérification du mot de passe
if mot_de_passe_utilisateur == mot_de_passe_attendu:
    print("Mot de passe correct ! Accès autorisé.")
else:
    print("Mot de passe incorrect. Accès refusé.")
    
    
    
    
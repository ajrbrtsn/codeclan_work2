class Team:

    def __init__(self, team_name, players, coach):
        self.team_name = team_name
        self.players = players
        self.coach = coach
        self.points = 0
        
    def has_player(self, player_to_find):
        if player_to_find in self.players:
            return True
        return False

    def add_player(self, player_to_add):
        self.players.append(player_to_add)

    def play_game(self,result):
        if result == True:
            self.points += 3

    
    
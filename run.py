from prettytable import PrettyTable
from turtle import Turtle, Screen
from prettytable import MSWORD_FRIENDLY

table = PrettyTable()
table.add_column("Fruit",["banana","apple","orange"])
table.add_column("Location",["New York","California","China"])
table.add_column("Name",["Chenyun","Jade","Nunny"])
table.add_row(["banana","apple","aas"])
table.align = "r"
table.valign = "t"
# table.border = False
table.set_style(MSWORD_FRIENDLY)
print(table)

# timmy = Turtle()
# print(timmy)

# timmy.shape("turtle")
# my_screen = Screen()
# timmy.color("blue")
# timmy.speed(0.2)
# timmy.fd(100)
# timmy.bk(200)
# print(my_screen.canvheight)
# my_screen.exitonclick()

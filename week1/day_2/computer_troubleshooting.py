# SET VARIABLE computer_on = input true
# SET VARIBALE boot_up = input true
# SET VARIABLE plugged_in = input true
# SET VARIABLE problem_fixed = input true

# IF computer_on AND boot_up is true 
    # Then print "Login with password"

# IF computer_on AND boot_up is false
    #Then print "Is it plugged in"

# IF plugged_in is true
    #then print "Computer is broken"
# Else:
    #then print "Plug it in"

fixed = False
print("Let's see if we can get this sorted")
print("Turn your computer on")

status = input ("Did it boot up (y/n)? ")
if status == "y":
    fixed = True
else: 
    plugged_in = input("Is it plugged in(y/n)? ")
    if plugged_in == "n":
        print("Plug it in")
        working = input("Did this fix the problem(y/n) ?")
        if working == "y":
            fixed = True

if fixed == True:
    print("Login with password")
else:
    print("Your computer is broken")

print("Done")
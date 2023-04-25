# The file that will run when we want to start our website (or server)

from website import create_app

app = create_app()

# Only if we run this file, are we going to execute. 
if __name__ == '__main__':
    app.run(debug=True)
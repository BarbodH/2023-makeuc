from knowledge_box.app_factory import create_app
import os

if __name__ == "__main__":
    is_first_launch = not os.path.exists(".initialized")
    if is_first_launch:
        with open(".initialized", "w") as file:
            pass

    app = create_app(is_first_launch)
    app.run(debug=True)

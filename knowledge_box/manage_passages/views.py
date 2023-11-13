from flask import Blueprint, render_template
from flask_login import login_required, current_user
from knowledge_box.models import Passage, User

manage_passages = Blueprint("manage_passages", __name__, static_folder="static", template_folder="templates")


@manage_passages.route("/")
@login_required
def manage_passages_page():
    passages = Passage.query.filter_by(user_id=current_user.id).all()
    return render_template("manage-passages.html", passages=passages)

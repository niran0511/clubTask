function displayProfile() {
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const projectLinks = document.getElementById('projectLinks').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('profileImage').files[0];

    if (name && email && department && projectLinks && description) {
        document.getElementById('profileName').textContent = name;
        document.getElementById('profileEmail').textContent = email;
        document.getElementById('profileDept').textContent = department;
        document.getElementById('profileProjects').textContent = projectLinks;
        document.getElementById('profileDesc').textContent = description;

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profilePic').src = e.target.result;
            };
            reader.readAsDataURL(imageFile);
        } else {
            document.getElementById('profilePic').src = 'https://via.placeholder.com/160';
        }

        document.getElementById('userForm').style.display = 'none';
        document.getElementById('profile').style.display = 'block';
    } else {
        alert('Please complete all fields.');
    }
}

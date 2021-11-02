const main = document.querySelector('#main');
const searchInput = document.querySelector('#search');

const render = (user) => {
  return `
    <div class="card mb-1" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  loading="lazy"
                  src="${user.picture.large}"
                  class="img-fluid rounded-start"
                  alt="Aleksi"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${user.name.first} ${
    user.name.last
  }</h5>

                  <p class="card-text">
                    <small class="text-muted">${user.location.city}, ${
    user.location.country
  }</small>
                  </p>
                  <button data-idx=${
                    user.login.uuid
                  } type="button" class="btn btn-primary">
                    More Info
                  </button>
                </div>
              </div>

              <ul class="list-group ${user.isShow ? 'show' : ''}">
                <li class="list-group-item">
                  Email: ${user.email}
                </li>
                <li class="list-group-item">Street: ${
                  user.location.street.number
                } ${user.location.street.name}</li>
                <li class="list-group-item">State: ${user.location.state}</li>
                <li class="list-group-item">Country: ${
                  user.location.country
                }</li>
                <li class="list-group-item">Phone: ${user.phone}</li>
              </ul>
            </div>
          </div> 
    `;
};

async function getUser() {
  const res = await fetch('https://randomuser.me/api/?results=10');
  const data = await res.json();
  const users = data.results;
  const newDiv = document.createElement('div');

  const formatData = users.map((user) => {
    const newObj = {
      ...user,
      isShow: false,
    };
    return newObj;
  });

  main.appendChild(newDiv);
  newDiv.innerHTML = formatData.map((user) => render(user)).join('');

  searchInput.addEventListener('keyup', (e) => {
    const { value } = e.target;

    // search users based on first name and last name
    const filteredUsers = formatData.filter(
      (user) =>
        user.name.first.toLowerCase().includes(value.toLowerCase()) ||
        user.name.last.toLowerCase().includes(value.toLowerCase())
    );
    newDiv.innerHTML = filteredUsers.map((user) => render(user)).join('');
  });
  newDiv.addEventListener('click', (e) => {
    // return if not a button
    if (!e.target.matches('button')) return;
    // togglle show class of list-group
    const listGroup = e.target.parentNode.parentNode.nextElementSibling;
    listGroup.classList.toggle('show');
  });
}
getUser();

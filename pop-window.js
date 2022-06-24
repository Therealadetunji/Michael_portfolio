const data = [
  {
    name: 'Tonic',
    workdescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    description: {
      featured:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    languages: {
      featured: ['html', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    liveurl: 'https://therealadetunji.github.io/Michael_portfolio/',
    sourcecode: ' ',
  },

  {
    name: 'Multi-Post Stories',
    workdescription: {
      company: 'FACEBOOK',
      role: 'FullStack Dev',
      year: '2015',
    },
    description: {
      featured:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    languages: {
      featured: ['html', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    liveurl: 'https://therealadetunji.github.io/Michael_portfolio/',
    sourcecode: ' ',
  },

  {
    name: 'Facebook 360',
    workdescription: {
      company: 'Facebook',
      role: 'Fullstack Dev',
      year: '2015',
    },
    description: {
      featured:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    languages: {
      featured: ['html', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    liveurl: 'https://therealadetunji.github.io/Michael_portfolio/',
    sourcecode: 'not sure it',
  },

  {
    name: 'Uber Navigation',
    workdescription: {
      company: 'Uber',
      role: 'Uber Developer',
      year: '2018',
    },
    description: {
      featured:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    languages: {
      featured: ['html', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    liveurl: 'https://therealadetunji.github.io/Michael_portfolio/',
    sourcecode: '',
  },
];

console.log(data);
const projectsection = document.querySelector('.work'); // to get the grid and working on that work section
data.forEach((element) => {
  // forEach or map
  //   console.log(element);
  const allCard = `
  <div class="card-work" id="card-one">
        <div class="left">
          <img
            src="./images/Snapshoot-Portfolio.png"
            alt="Tonic image"
            class="snapshot-portfolio"
          />
          <img
            src="./images/Snapshoot-Portfolio-nature.png"
            alt="nature image"
            class="desktop"
          />
        </div>
        <div class="right">
          <nav class="title">
            <h2 class="project-title">${element.name}</h2>
            <nav class="content">
              <div class="clint">${element.workdescription.company}</div>
              <div class="counter"></div>
              <div class="role">${element.workdescription.role}</div>
              <div class="counter"></div>
              <div class="year">${element.workdescription.year}</div>
            </nav>
          </nav>
          <p class="description">
            ${element.description.featured}
          </p>
          <div class="main-button">
            <ul class="buttons">
              <li class="button">${element.languages.featured[0]}</li>
              <li class="button">${element.languages.featured[1]}</li>
              <li class="button">${element.languages.featured[2]}</li>
            </ul>
          </div>
          <div class="more">
            <button class="btn btn-project" type="button">See Project</button> 
          </div>
        </div>
      </div>
  `;
  projectsection.innerHTML += allCard;
});

const clickproject = document.querySelectorAll('.btn-project');
const cancelling = document.querySelector('.cancellation');

clickproject.forEach((btn) => {
  btn.onclick = () => {
    const pop = document.querySelector('.pop');
    pop.classList.add('show');

    data.forEach((e) => {
      const Desk = document.querySelector('.Desk');
      const Tnc = document.querySelector('.Tnc');
      const newclint = document.querySelector('.new-clint');
      const workrole = document.querySelector('.role');
      const year = document.querySelector('.year');
      const langbuttons = document.querySelector('.buttons');

      Desk.innerHTML = `${e.description.featured}`;
      newclint.innerHTML = `${e.workdescription.company}`;
      Tnc.innerHTML = `${e.name}`;
      workrole.innerHTML = `${e.workdescription.role}`;
      year.innerHTML = `${e.workdescription.year}`;

      //   console.log(e.liveurl);
      console.log(e.description.featured);
      console.log(e.name);
      console.log(e.workdescription.company);
      console.log(e.workdescription.role);
      console.log(e.workdescription.year);
    });
  };
});

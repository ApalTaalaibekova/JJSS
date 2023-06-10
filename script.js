
const dataAlt = [

    {
        name: 'super burger',
        img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
        price: 100,
        category: 'burgers'
    },
    {
        name: 'pro burger',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
        price: 150,
        category: 'burgers'
    },
    {
        name: 'extra burger',
        img: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg',
        price: 180,
        category: 'burgers'
    },
    {
        name: 'italian pizza',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
        price: 300,
        category: 'pizzas'
    },
    {
        name: 'meat pizza',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
        price: 400,
        category: 'pizzas'
    },
    {
        name: 'pivo',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
        price: 500,
        category: 'drinks'
    },
    {
        name: 'Vino',
        img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
        price: 1000,
        category: 'drinks'
    },
    {
        name: 'Vodka',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
        price: 2000,
        category: 'drinks'
    },
    {
        name: 'tequila',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
        price: 3000,
        category: 'drinks'
    },
]

///////////////////////////////////////////////////////////////////////////

const output = document.querySelector('.output')
// Создается ссылка на элемент с классом "output", который является
// контейнером для отображения списка товаров.



// функция categoriesRender, принимает data в качестве аргумента и отображает
// элементы списка. Для каждого элемента данных создаются соответствующие элементы HTML
const categoriesRender = (data) => {
    output.innerHTML = ''
    data.forEach(el => {
        const wrap = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('p')
        const obr = document.createElement('div')
        const price = document.createElement('p')
        const show = document.createElement('h4')
        const category = document.createElement('p')

        category.classList = 'catbtn'
        wrap.classList = 'wrap'
        obr.classList = 'obr'
         

        show.textContent = 'show'
        image.src = el.img
        name.textContent = el.name
        
        show.addEventListener('click',()=>{
            const isVisible = category.classList.toggle('show-info');
            if (isVisible) {
              price.textContent = el.price;
              category.textContent = el.category;
            } else {
              price.textContent = '';
              category.textContent = '';
            }
        });


        obr.append(price,category)
        wrap.append(image, name, show, obr)
        output.append(wrap)

    })

}

categoriesRender(dataAlt)
// Вызывается функция categoriesRender с аргументом dataAlt, которая содержит данные о товарах.

///////////////////////////////////////////////////////////////////////////////////////////

const categoryChoise = [ 'all', 'burgers', 'pizzas', 'drinks']
// Создаем массив categoryChoise, который содержит список категорий, включая "all", "burgers", "pizzas" и "drinks"



const onButtonClickRenderItems = () => {
    const categoriesWrap = document.querySelector('.categories__choise')

    categoryChoise.forEach(el => {
        const option = document.createElement('option')

        option.textContent = el
        option.value = el
        option.classList = 'categoryBtn'

        categoriesWrap.addEventListener('change', () => {
            // const allButtons = document.querySelectorAll('.categoryBtn');
            // allButtons.forEach(btn => {
            //     btn.classList.remove('active');
            // });
            // button.classList.add('active');

            const selectedCategory = categoriesWrap.value
            if(selectedCategory === 'all') {
                categoriesRender(dataAlt)
                title.textContent = el
            } else {
                const result = dataAlt.filter(item => {
                    return item.category === selectedCategory  
                })
                categoriesRender(result)
                title.textContent = el
            }
        })
        categoriesWrap.append(option)
    })

}

onButtonClickRenderItems()

////////////////////////////////////////////////////////////////////////////////



 const activeButton = () => {
    const categoryBtn = document.querySelectorAll('.categoryBtn')
    // categoryBtn[0].classList.add('active')

    categoryBtn.forEach((el, parentIndex) => {
        el.addEventListener('click', () => {
            categoryBtn.forEach((item, childIndex) => {
                console.log(`parentIndex - ${parentIndex}, childIndex - ${childIndex}`);
                if(parentIndex === childIndex) {
                    item.classList.add('active')
                } else if (parentIndex !== childIndex) {
                    item.classList.remove('active')
                }
            })
        })
    })

}

activeButton()

// /////////////////////////////////////////////////////

const form = document.querySelector('form')
const search = document.querySelector('.search')
const x = document.querySelector('.x')



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value.trim().toLowerCase();
    // searchTerm значение в инпуте, которое вводит user

    const searchResults = dataAlt.filter((el) =>
        // el - каждое слово
        el.name.toLowerCase().includes(searchTerm)
    );
    // search.value = ''
    categoriesRender(searchResults);
});

x.addEventListener('click', () => {
    search.value = ''
})

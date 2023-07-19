<template>
    <main-template>
        <center-title-block title="<p>Product</p><p>'Search'</p>"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        >
            <div class="flex flex-col justify-center items-center mt-8">
                <div class="text-white text-2xl font-normal text-center max-w-xl">
                    <p>Enter a keyword and select a category to load</p>
                    <p>a list of the
                        top selling products.</p>
                </div>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="mt-[-650px] w-7/12 justify-center z-10 bg-white rounded-3xl relative p-2">
                <div class="flex gap-16">
                    <div class="basis-1/2 flex flex-col text-[#5D6483] text-base font-normal pl-20 pb-8">
                        <div class="mt-16">
                            <v-label>Keyword</v-label>
                            <v-input v-model="keyword" type="text" />
                        </div>
                        <div class="mt-8">
                            <v-label>Category</v-label>
                            <v-select @changeSelectItem="handleSelectItem" :items="ITEMS_CATEGORY" />
                        </div>
                        <div class="flex gap-10 mt-8">
                            <div class="basis-1/2">
                                <v-label>Marketplace</v-label>
                                <v-select @changeSelectItem="handleSelectItem" :items="ITEMS_MARKETPLACE" />
                            </div>
                            <div class="basis-1/2">
                                <v-label>Sort By</v-label>
                                <v-select @changeSelectItem="handleSelectItem" :items="ITEMS_SORT" />
                            </div>
                        </div>
                        <v-button class="mt-11" @click="handleSearch">Search</v-button>

                    </div>
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                        <img src="../assets/images/search/man.svg" alt=""/>
                    </div>
                </div>
            </div>
<!--            Remove this-->
            <div class="rounded-3xl w-1/3 justify-between bg-white flex mt-24 py-10 px-20">
                <button @click="showLoginModal = true">Show Modal</button>
                <button @click="showRegisterModal = true">Show Register modal</button>
            </div>
            <div
                class="w-7/12 mt-20 z-100">
                <div class="flex flex-col gap-10">
                    <search-item
                        v-for="(item, index) in filteredItems"
                        :key="index"
                        :title="item.title"
                        :image="item.image"
                        :description="item.description"
                        :asin="item.asin"
                        :date="item.date"
                        :brand="item.brand"
                        :count-reviews="item.countReviews"
                        :price="item.price"
                        :rank="item.rank"
                        :star="item.star"
                        :category="item.category"
                        :marketplace="item.marketplace"
                        />

                </div>
            </div>
        </section>
    </main-template>
    <modal v-if="showLoginModal" @close="showLoginModal = false">
        <login-form @login="handleLogin">
            <div class="text-3xl font-bold text-[#27282D]">Log In</div>
            <div class="text-[#5D6483] mt-3 mb-10">Login to your private member area using the form below</div>
        </login-form>
    </modal>
    <modal v-if="showRegisterModal" @close="showRegisterModal = false">
        <register-form @register="handleRegister" @switchToLogin="showLoginModal = true" @closeRegisterModal="showRegisterModal = false">
            <div class="text-3xl font-bold text-[#27282D]">Create an Account</div>
            <div class="text-[#5D6483] mt-3 mb-10">Register to use this free tool</div>
        </register-form>
    </modal>
</template>

<script setup lang="ts">
import CenterTitleBlock from "../components/TitleBlock/CenterTitleBlock.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import {BlogItemProps, CategoryItem} from "../components/BlogItem/BlogItem.vue";
import {BlogListItem} from "../components/BlogList/BlogList.vue";
import {Breadcrumb} from "../components/Breadcrumbs/Breadcrumbs.vue";
import VLabel from "../components/Label/VLabel.vue";
import VInput from "../components/Input/VInput.vue";
import VButton from "../components/Button/VButton.vue";
import VSelect, {VSelectItem} from "../components/Select/VSelect.vue";
import SearchItem, {SearchItemProps} from "../components/SearchItem/SearchItem.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import { computed, ref, watch } from 'vue';
import Modal from "../components/Modal/Modal.vue";
import LoginForm from "../components/Form/LoginForm.vue";
import RegisterForm from "../components/Form/RegisterForm.vue";
import titleBlock from '../assets/images/title_block_background.svg'
import image1 from "../assets/images/search/image1.jpg";
import image2 from "../assets/images/search/image2.jpg";
import image3 from "../assets/images/search/image3.jpg";
import image4 from "../assets/images/search/image4.jpg";
import image5 from "../assets/images/search/image5.jpg";
import image6 from "../assets/images/search/image6.jpg";
import image7 from "../assets/images/search/image7.jpg";
import image8 from "../assets/images/search/image8.jpg";
import image9 from "../assets/images/search/image9.jpg";
import image10 from "../assets/images/search/image10.jpg";




const ITEMS_CATEGORY: VSelectItem[] = [
    {
        value: 0,
        label: 'Guides',
        type: 'category'
    },
    {
        value: 1,
        label: 'Merch by Amazon',
        type: 'category'
    },
    {
        value: 2,
        label: 'Resources',
        type: 'category'
    },
    {
        value: 3,
        label: 'Strategies',
        type: 'category'
    },
]

const ITEMS_MARKETPLACE: VSelectItem[] = [
    {
        value: 0,
        label: 'WooCommerce',
        type: 'marketplace'
    },
    {
        value: 1,
        label: 'Shopify',
        type: 'marketplace'
    },
    {
        value: 2,
        label: 'Magento',
        type: 'marketplace'
    }
]

const ITEMS_SORT: VSelectItem[] = [
    {
        value: 0,
        label: 'Sales Rank',
        type: 'sort'
    },
    {
        value: 1,
        label: 'Price',
        type: 'sort'
    },
    {
        value: 2,
        label: 'Date',
        type: 'sort'
    }
]

const BREADCRUMBS: Breadcrumb[] = [
    {
        label: "'Home'",
        url: '/'
    },
    {
        label: 'Product Search',
        url: '/search'
    }
];

const PRODUCT_ITEMS: SearchItemProps[] = [
    {
        image: image1,
        star: 3.4,
        countReviews: 73,
        price: 8.29,
        rank: 107.945,
        title: 'New Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 1, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Guides',
        marketplace: 'Shopify',
    },
    {
        image: image2,
        star: 3.4,
        countReviews: 73,
        price: 18.29,
        rank: 207.945,
        title: 'New Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 2, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Guides',
        marketplace: 'Shopify',
    },
    {
        image: image3,
        star: 3.4,
        countReviews: 73,
        price: 38.29,
        rank: 307.945,
        title: 'Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 3, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Guides',
        marketplace: 'Magento',
    },
    {
        image: image4,
        star: 3.4,
        countReviews: 73,
        price: 48.29,
        rank: 407.945,
        title: 'Old Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 4, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Merch by Amazon',
        marketplace: 'Magento',
    },
    {
        image: image5,
        star: 3.4,
        countReviews: 73,
        price: 58.29,
        rank: 507.945,
        title: 'Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 5, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Merch by Amazon',
        marketplace: 'Magento',
    },
    {
        image: image6,
        star: 3.4,
        countReviews: 73,
        price: 68.29,
        rank: 607.945,
        title: 'Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 6, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Merch by Amazon',
        marketplace: 'Shopify',
    },
    {
        image: image7,
        star: 3.4,
        countReviews: 73,
        price: 78.29,
        rank: 707.945,
        title: 'Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 7, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Guides',
        marketplace: 'Shopify',
    },
    {
        image: image8,
        star: 3.4,
        countReviews: 73,
        price: 88.29,
        rank: 807.945,
        title: 'Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 8, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Resources',
        marketplace: 'WooCommerce',
    },
    {
        image: image9,
        star: 3.4,
        countReviews: 73,
        price: 98.29,
        rank: 907.945,
        title: 'Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 9, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Resources',
        marketplace: 'WooCommerce',
    },
    {
        image: image10,
        star: 3.4,
        countReviews: 73,
        price: 108.29,
        rank: 1507.945,
        title: 'Disney Pixar Toy Story Pepperoni Pizza Planet Logo T-Shirt',
        brand: 'Colorful Mandala Sacred Energy Yoga Flow Art',
        asin: 'B07NC9KZ12',
        date: 'July 10, 2022',
        description: "Perfect mandala for yogis, meditation, people who want calming and peaceful vibes and present moment awareness.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a ultricies scelerisque lectus libero mattis ultricies massa. Vel nisl, orci, sit eu sem. Bibendum quam aliquam massa mattis nunc, donec. Amet, porttitor dignissim pellentesque sit lacus.",
        category: 'Resources',
        marketplace: 'WooCommerce',
    }
]

const showLoginModal = ref(false)
const showRegisterModal = ref(false)
const isLoggedIn = ref(false); // Флаг для отслеживания состояния входа пользователя


const keyword = ref("");
const selectedCategory = ref<VSelectItem | null>(null);
const selectedMarketplace = ref<VSelectItem | null>(null);
const selectedSort = ref<VSelectItem | null>(null);

const filteredItems = ref<SearchItemProps[]>([...PRODUCT_ITEMS]);

const handleSearch = () => {
  if (isLoggedIn.value) {
    // Выполнить поиск только если пользователь вошел в свой аккаунт
    performSearch();
  } else {
    // Открыть модальное окно для входа
    showLoginModal.value = true;
  }
};

const handleLogin = () => {
  // Логика для выполнения входа пользователя
  isLoggedIn.value = true;
  showLoginModal.value = false;
  performSearch(); // Выполнить поиск после успешного входа
};

const handleRegister = () => {
  // Логика для регистрации пользователя
  isLoggedIn.value = true;
  showRegisterModal.value = false;
  performSearch(); // Выполнить поиск после успешной регистрации
};


const handleSelectItem = (selectedItem: VSelectItem) => {
  switch (selectedItem.type) {
    case 'category':
        selectedCategory.value = selectedItem;
        console.log(selectedCategory.value = selectedItem);
        break;
    case 'marketplace':
        selectedMarketplace.value = selectedItem;
        console.log(selectedMarketplace.value = selectedItem);
        break;
    case 'sort':
        selectedSort.value = selectedItem;
        console.log(selectedSort.value = selectedItem);
    default:
      break;
  }
};



const performSearch = () => {
  let items = [...PRODUCT_ITEMS];
  if (selectedCategory.value !== null) {
    const category = ITEMS_CATEGORY.find(item => item.value === selectedCategory.value?.value);
    console.log(category)
    items = items.filter(item => item.category === category?.label);
  }
  if (selectedMarketplace.value !== null) {
    const marketplace = ITEMS_MARKETPLACE.find(item => item.value === selectedMarketplace.value?.value);
    console.log(marketplace)
    items = items.filter(item => item.marketplace === marketplace?.label);
  }
  if (selectedSort.value !== null) {
    if (selectedSort.value?.value === 0) {
        items.sort((a, b) => b.rank - a.rank); 
    } else if (selectedSort.value?.value === 1) {
        items.sort((a, b) => b.price - a.price);
    } else if (selectedSort.value?.value === 2) {
        items = items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }
  if (keyword.value.trim() !== '') {
    const searchTerm = keyword.value.toLowerCase();
    items = items.filter(item => {
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.brand.toLowerCase().includes(searchTerm) ||
        item.asin.toLowerCase().includes(searchTerm)
      );
    });
  }
  filteredItems.value = items;
};

</script>

<style scoped>
</style>
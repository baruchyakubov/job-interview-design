export default {
	template: `
        <ul class="reviews main-container">
                <li v-for="review in reviews" :key="review">
                    <p class="review">{{ review.review }}</p>
                    <div class="user-preview">
                        <img :src="review.img" alt="" />
                        <h3>{{ review.name }}</h3>
                        <p>{{ review.des }}</p>
                    </div>
                </li>
        </ul>
    `,
     data(){
        return {
            reviews:[
                {
                    name: 'Satish Patel',
                    des: 'Founder & CEO, Huddle',
                    review: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
                    img:'assets/img/profile-1.jpg'
                },
                {
                    name: 'Bruce McKenzie',
                    des: 'Founder & CEO, Huddle',
                    review: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
                    img:'assets/img/profile-2.jpg'
                },
                {
                    name: 'Iva Boyd',
                    des: 'Founder & CEO, Huddle',
                    review: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
                    img:'assets/img/profile-3.jpg'
                }
            ]
        }
     }
}
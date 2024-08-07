import React from 'react';
import '../Styles/customer.css'
import customer1 from '../Assets/Images/customer1.jpg';
import customer2 from '../Assets/Images/customer2.jpg';
import customer3 from '../Assets/Images/customer3.jpg';

const Customer = () => {
    return (
        <>
            <div class="testimonial-section">
                <div class="container">
                    <h2 className="text-center" > What Customers Say</h2>
                    <h5 className="text-center">Our clients’ testimonials are the best proof of our high level of service</h5>
                    <div class="row mt-4">
                        <div class="col-md-4">
                            <div class="testimonial-item">
                                <img src={customer1} alt="Client 1" />
                                <h5>Richard Jones</h5>
                                <p>"This is a great travel & tour service! Highly recommend it to everyone."</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="testimonial-item">
                                <img src={customer2} alt="Client 2" />
                                <h5>Jessica Wilson</h5>
                                <p>"A wonderful experience. The team was professional and attentive."</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="testimonial-item">
                                <img src={customer3} alt="Client 3" />
                                <h5>William Thomas</h5>
                                <p>"I would like to thank Travel & Tour for organising wonderful tour for me in Australia. Everything was very well organised. Thank you very much for everything! "</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer
import React from 'react';
import './Footercatagories.css';

const Footercatagories = () => {
    return (
        <>
            <div className="footerPayments">
                <h6>Payments</h6>
                <div className="payment-modes">
                    <div className="modes">
                        <button>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" title="Visa" alt="Visa" />
                        </button>
                    </div>
                    <div className="modes">
                        <button>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png" title="Master Card" alt="Master Card" />
                        </button>
                    </div>
                    <div className="modes">
                        <button>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/640px-Maestro_logo.svg.png" title="Maestro" alt="Maestro" />
                        </button>
                    </div>
                    <div className="modes">
                        <button>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/640px-Paytm_logo.png" title="PayTm" alt="PayTm" />
                        </button>
                    </div>
                    <div className="modes">
                        <button>
                            <img src="https://cdn-icons-png.flaticon.com/128/10157/10157751.png" title="Net Banking" alt="Net Banking" />
                        </button>
                    </div>
                    <div className="modes">
                        <button>
                            <img src="https://cdn-icons-png.flaticon.com/128/5360/5360690.png" title="Cash on Delivery" alt="Cash on Delivery" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="footerCategories">
                <div className="Cat12">
                    <div className="Cat" id='cat1'>
                        <div className="main-heading"><h5>General Store</h5></div>
                        <div className="sub-heading">Factory-Direct:</div>
                        <div className="itemslist">
                            <ul>
                                {["Accessories ", " Baby Care", "Bathing Needs", "Health & Nutrition", "Dried Fruits, Nuts & Seeds", "Household Needs", "Oral Care", "Personal Care", "Sanitary & Hygiene", "OTC & Health Needs"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a> \</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">Baby Needs:</div>
                        <div className="itemslist">
                            <ul>
                                {["Baby Food ", " Baby Care"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a> \</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">Personal-Care:</div>
                        <div className="itemslist">
                            <ul>
                                {["Skin Care", "Sanitary & Hygiene", "Oral Care", "Hair Care", "Bath & Body Products", "Sexual Wellness", "Deodorants & Perfumes", "Eyes, Ears & Lips", "Shaving & Hair Removal", "Hand, Foot & Nails"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a> \</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">Health-n-Nutrition:</div>
                        <div className="itemslist">
                            <ul>
                                {["Nutritional Foods", "Breakfast Cereals", "Weight Management"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a> \</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">OTC-n-Health-Needs:</div>
                        <div className="itemslist">
                            <ul>
                                {["First Aid", "Pain Relief", "Cold Relief", "Joint Care & Support", "Skin & Foot Care", "Digestives & Laxatives", "Healthcare Devices", "Anti-Smoking Products"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a> \</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="Cat" id='cat2'>
                        <div className="main-heading"><h5>Pharmacy</h5></div>
                        <div className="sub-heading">Medicine Information:</div>
                        <div className="itemslist">
                            <ul>
                                {["Health Records", "Request a Product", "Store Locator", "Top Searches", "Alphabet Wise Products"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a> \</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">Browse drugs by Therapeutic category:</div>
                        <div className="itemslist">
                            <ul>
                                {["Gastrointestinal & Hepatobiliary System", "Cardiovascular & Hematopoietic system", "Respiratory System", "Central Nervous System", "Musculo-Skeletal System", "Hormones", "Contraceptive Agents", "Infectious Disease Drugs", "Oncology", "Genito - Urinary System", "Endocrine & Metabolic System", "Vitamins & Minerals", "Nutrition", "Eye", "Ear & Mouth / Throat", "Dermatologicals", "Anaesthetics & Intravenous Solutions", "Allergy & ImmuneSystem", "Antidotes, Detoxifying Agents & Drugs Used in Substance Dependence", "Miscellaneous"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a> \</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">Browse Surgicals products by category:</div>
                        <div className="itemslist">
                            <ul>
                                {["Anaesthesia", "Cardiovascular", "CSSD", "Catheters & Tubes", "IV Needs", "Mobilization Equipment", "Orthopaedic", "Surgicals", "Pulmonary/Emergency Care", "Diagnostic/Imaging"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a> \</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Cat34">
                    <div className="Cat" id='cat3'>
                        <div className="main-heading"><h5>Diagnostics</h5></div>
                        <div className="sub-heading">Radiology Tests</div>
                        <div className="itemslist">
                            <ul>
                                {["2D Echo", "Bone Densitometry", "TMT", "EEG / ENMG", "Audiometry", "ECG (Electrocardiogram)", "MRI", "Mammography", "CT Scan", "Pulmonary Function Test (PFT)", "X-Ray"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a>\</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">Condition Based</div>
                        <div className="itemslist">
                            <ul>
                                {["Kidney", "Heavy Metals", "Lungs", "Fertility", "Infectious Disease", "Blood Disorders", "Inflammatory Markers", "Vitamins", "Electrolytes", "Anaemia", "Autoimmune Disorders", "Allergy", "Heart", "Drug Level Monitoring", "Liver", "Musculo Skeletal Disorders", "Toxicology"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a>\</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">Department Wise Diagnostic Tests</div>
                        <div className="itemslist">
                            <ul>
                                {["Serology", "Microbiology", "Biochemistry", "Hematology", "Molecular Biology", "Clinical Pathology", "Profile Parameters"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a>\</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="Cat" id='cat4'>
                        <div className="main-heading"><h5>Doctor Consultation</h5></div>
                        <div className="sub-heading">By Specialization</div>
                        <div className="itemslist">
                            <ul>
                                {["General Medicine", "Obstetrics and Gynaecology", "Diabetology", "Cardiology", "Orthopaedics", "Dermatology-Venereology", "Infectious Disease", "Reproductive Medicine", "IVF", "Complicated", "Pregnancy", "General Physician"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a>\</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-heading">By Symptoms</div>
                        <div className="itemslist">
                            <ul>
                                {["Chest Pain", "Cold and Fever", "Depression", "Constipation", "Low Back Pain", "Irregular Periods", "Throat Pain", "Hair Fall", "Breathing Problems", "Abdominal Pain", "Sexual Health", "Pregnancy"].map(item => (
                                    <li key={item}><a href="" title={item}>{item}</a>\</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-medplus">
                <div className="sub-heading" id='imp'>About MedPlusMart:</div>
                <div className="small-para"><span>MedPlus:</span> One of the most trusted gateways to medicines and general provision</div>
                <div className="small-para">With an aim to eradicate fake and ineffective medicines, and supply high-quality medicines in India, MedPlus was launched in 2006 in Hyderabad. According to WHO research, every 1 or 2 in 10 medicines are proven to be adulterated in low/medium income countries like India and MedPlus aspires to bring about a change in this statistic. To encourage and elevate transparency in the functioning of the pharmaceutical industry, MedPlus has been successfully contributing in providing genuine and unadulterated medicines since its inception. Currently operating in 300+ cities, with 1500+ offline stores in India, MedPlus is the second largest pharmacy chain in India today. Welcome to a seamless and impeccable shopping experience!</div>
            </div>
            <div className="reasons-for-medplus">
                <div className="sub-heading">6 Reasons for you to Shop from MedPlus:</div>
                <div className="reason">
                    <ol>
                        <li><span>Authentic medicines:</span> Be 100% assured of receiving genuine medicines</li>
                        <li><span>Monthly provisions:</span> One stop store for both medicines as well as monthly provisions (kiraana)</li>
                        <li><span>Quick to-door deliveries:</span> We ensure the delivery of well-packaged products to your doorstep at quick timelines.</li>
                        <li><span>Pocket-friendly:</span> Our range of discounts, offers and deals will allow you to go economical everyday, everytime. We recommend you to explore <a href="" title='Payback Special Sale'>Payback Special Sale</a>, our special saving scheme.</li>
                        <li><span>Customer-friendly:</span> Order from the comfort of your sofa with our easy browsing and smooth billing procedure. Our hassle-free <a href="" title='Upload'> Upload</a> option allows you to seamlessly upload your Doctor Written Medicines List online and have your medicines delivered to you!</li>
                        <li><span>Track and Re-Order:</span> Conveniently refer to all your previous bills and orders which will allow you to re-order with a single click.</li>
                    </ol>
                </div>
            </div>
            <div className="small-text">Also, for those of you who prefer offline shopping, <a href="" title='Locate your Nearest Store'>locate your nearest store</a> and get going!</div>
        </>
    );
};

export default Footercatagories;


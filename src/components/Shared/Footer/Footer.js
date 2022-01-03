import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-secondary top-bottom-footer-space">
            <div class="row">
                <div class="col-6 text-light">Social Media icon</div>
                <div class="col-2 text-light">
                    About <br />
                    History <br />
                    History2 <br />
                    History3 <br />
                    History4 <br />
                    History5 <br />

                </div>
                <div class="col-2 text-light">
                    Services <br />
                    Service1 <br />
                    Service2 <br />
                    Service3 <br />
                    Service4 <br />
                    Service5 <br />
                </div>
                <div class="col-2 text-light">
                    Other <br />
                    Help <br />
                    Help1 <br />
                    Help2 <br />
                </div>
            </div>
        </div>
    );
};

export default Footer;
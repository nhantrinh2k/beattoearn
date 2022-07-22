import React from 'react';
import styles from "../Home/home.module.scss";
import rocket from "../../../src/public/images/Vector@3x.png";
import image from "../../../src/public/images/aaa 1.png";
import cup from "../../../src/public/images/layer1.png";
import ticket from "../../../src/public/images/ticket.png";
import reward from "../../../src/public/images/reward.png";
import bet from "../../../src/public/images/bet.png";

function Home(props) {
    return (
        <div>
            <div className='container position-relative my-5'>
                <div className='row align-items-center'>
                    <div className='col-6'>
                        <div className=''>
                            <p className='fs-5 py-4 w-100 text-justify'>
                                Actually, BTE is not providing a betting service. It is totally free to play 'prediction' game.
                                Plus, it is a passive income generator. All you have to do buying a NFT (Betting Slip) in return 10K $BTE token and keeping it on
                                your wallet! Then, join our daily competitions in the game. Really unbelieveble, huh?
                            </p>
                            <div className='text-center pb-3'>
                                <button className={`${styles.custom_button}`}>
                                    <img alt="rocket" className='img-fluid pe-3' src={rocket} />
                                    <span>Launch App</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img alt="vector" className='img-fluid' src={image} width={637} height={792} />
                    </div>
                </div>
                <div className={`${styles.position} position-absolute start-50 translate-middle`}>
                    <img alt="cup" className='img-fluid' src={cup} width={249} height={298} />
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <h1 className={`${styles.border} text-white px-5`}>ABOUT US</h1>
                    <div className='row text-center'>
                        <div className='col-4 flex-column text-center'>
                            <img alt="ticket" className='img-fluid' src={ticket} width={100} height={100} />
                            <div className='px-5'>
                                <p className='text-white fs-4 fw-bold pt-4'>Buy a ticket with your BTE tokens</p>
                                <p className='text-white'>You can level up a ticket when you spend 10,000 BTE.</p>
                            </div>
                        </div>
                        <div className={`${styles.border_bet} col-4 flex-column text-center`}>
                            <img alt="bet" className='img-fluid' src={bet} width={100} height={100} />
                            <div className='px-5'>
                                <p className='text-white fs-4 fw-bold pt-4'>Don't forget to place your bets!</p>
                                <p className='text-white'>You have the right to participate in 10 competitions every day.</p>
                            </div>
                        </div>
                        <div className='col-4 flex-column text-center'>
                            <img alt="reward" className='img-fluid' src={reward} width={85} height={100} />
                            <div className='px-5'>
                                <p className='text-white fs-4 fw-bold pt-4'>Rewards Distributionst</p>
                                <p className='text-white'>Your earnings will reflect within five hours of the end of the last contest. You can withdraw your winnings from the withdrawal menu in your wallet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tokenomics'>
                <div className='container py-5'>
                    <h1 className={`${styles.border_black} text-black px-5`}>TOKENOMICS</h1>
                    <div className='row text-left'>
                        <div className='col-6'></div>
                        <div className='col-6'>
                            <p className='fs-5'>Reward Pool will be locked in the game smart contract and be withdrawable by users in the amount of what they earned in the daily competitions.</p>
                            <p className='fs-5'>Reserved: 500,000 tokens were paid as pinksale commission. 350,000 tokens will be used for strategic partnerships. is only 0.85% of the supply.</p>
                            <p className='fs-5 fw-bold'>Maximum Cap: 100.000.000 $BTE</p>
                            <div className='tax'>
                                <span className='fs-5 fw-bold pe-3'>Tax:</span>
                                <span className='fs-5'>Buy 2%</span>
                                <span className='fs-5'>Sell 50%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='roadmap'>
                <div className='container'>
                    <h1 className={`${styles.border} text-white px-5`}>ROADMAP</h1>

                </div>
            </div>
        </div>
    );
}

export default Home;
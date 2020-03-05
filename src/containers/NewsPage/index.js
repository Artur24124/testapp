import React, { Component } from 'react';

import './style.scss';

class NewsPage extends Component {
    render() {
        return (
            <div className='news'>
                <h1>News Page</h1>

                <div className="news__items">
                    <div className="news__item">
                        <h2 className="news__item-title">Coronavirus French</h2>
                        <img
                            src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2020/3/5/55019ad0-bfae-4f4f-8e22-deab0e135cbe.jpg"
                            alt="News"
                            className="news__item-image"
                        />
                        <p className='news__item-text'>
                            French officials have reported two more deaths linked to the coronavirus outbreak, bringing the total number of deaths to six.
                            France has also registered 92 new confirmed cases, taking the total toll of cases to 377.
                        </p>
                    </div>

                    <div className="news__item">
                        <h2 className="news__item-title">Coronavirus French</h2>
                        <img
                            src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2020/3/5/55019ad0-bfae-4f4f-8e22-deab0e135cbe.jpg"
                            alt="News"
                            className="news__item-image"
                        />
                        <p className='news__item-text'>
                            French officials have reported two more deaths linked to the coronavirus outbreak, bringing the total number of deaths to six.
                            France has also registered 92 new confirmed cases, taking the total toll of cases to 377.
                        </p>
                    </div>

                    <div className="news__item">
                        <h2 className="news__item-title">Coronavirus French</h2>
                        <img
                            src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2020/3/5/55019ad0-bfae-4f4f-8e22-deab0e135cbe.jpg"
                            alt="News"
                            className="news__item-image"
                        />
                        <p className='news__item-text'>
                            French officials have reported two more deaths linked to the coronavirus outbreak, bringing the total number of deaths to six.
                            France has also registered 92 new confirmed cases, taking the total toll of cases to 377.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsPage;
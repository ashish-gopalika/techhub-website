import React from 'react';
import SingleQuestion from './SingleQuestion';
import { get10Days } from '../../common/helpers';

import getQuestions from '../../apis/questions';

interface AlphaQuestionsState {
  alpha: any;
  lastTenDays: any;
}

export default class AlphaQuestions extends React.Component<
  {},
  AlphaQuestionsState
> {
  constructor(props) {
    super(props);

    this.state = {
      alpha: [],
      lastTenDays: get10Days(),
    };
  }
  componentDidMount = async () => {
    var questions = await getQuestions();
    var lastTenDays = get10Days();
    let data = [];
    var lastTenQuestions = questions['alpha'].filter(function (item) {
      return lastTenDays.includes(item.questionDate);
    });
    this.setState({
      alpha: lastTenQuestions.reverse(),
    });
  };

  render() {
    return (
      <>
        <div className="w-full px-2 md:px-12 my-4" id="alpha-questions">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="sm:flex items-center justify-between">
              <div className="flex text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                <img className="h-12" src="assets/svg/alpha.svg" alt="" />
                <p className="ml-4 py-3 self-center">TechHub Alpha Questions</p>
              </div>
            </div>
          </div>
          <div className="px-6 md:px-16 flex flex-col gap-8">
            {this.state.alpha.map((item) => (
              <SingleQuestion date={item.questionDate} details={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

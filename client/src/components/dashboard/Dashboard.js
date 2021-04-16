import React, { Component } from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
  joinWaitlist = async (event) => {
    try {
      alert('join watitlist form will be here');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {this.props.user ? (
          <h1>
            Super Great Job {this.props.user.username} <br></br>You're Logged in
          </h1>
        ) : (
          <>
            <div className="dashboard">
              <main>
                <h1>Turn your class into an economy</h1>
                <h3>Classroom management and financial literacy made easy</h3>
              </main>

              <section>
                <img
                  src="../../images/engage-students.png"
                  alt="engage students photo"
                  className="dashboard-photo"
                />
                <div className="intro-heading-and-description">
                  <h3>Engage students</h3>
                  <p>
                    Assign classroom jobs, salaries, and rent to engage students
                    through experiential learning. Classroom management
                    simplified!
                  </p>
                </div>
              </section>

              <section>
                <div className="intro-heading-and-description">
                  <h3>Create a positive culture</h3>
                  <p>
                    Incentivize positive behaviors through a a system of bonuses
                    and fines.
                  </p>
                </div>
                <img
                  src="../../images/positive-culture.png"
                  alt="positive culture photo"
                  className="dashboard-photo"
                />
              </section>

              <section>
                <img
                  src="../../images/financial-responsibility.png"
                  alt="financial responsibility photo"
                  className="dashboard-photo"
                />
                <div className="intro-heading-and-description">
                  <h3>Teach financial responsibility</h3>
                  <p>
                    Students save, spend, budget, and work towards goals to
                    purchase classroom rewards. Check out our extension lessons
                    to incorporate into any classroom.
                  </p>
                </div>
              </section>

              <section>
                <div className="intro-heading-and-description">
                  <h3>Save time</h3>
                  <p>
                    All the resources you need at your fingertips. Choose from
                    ClassCoin’s teacher curated content, or customize your own!
                  </p>
                </div>
                <img
                  src="../../images/save-time.png"
                  alt="save time photo"
                  className="dashboard-photo"
                />
              </section>

              <section>
                <form>
                  {/* add functionality here */}
                  <button onClick={this.joinWaitlist}>Join Waitlist</button>
                </form>
              </section>

              <section className="detailed-description">
                <h3>What is ClassCoin?</h3>
                <p>
                  ClassCoin is a digital incentive system and financial literacy
                  platform, designed to improve classroom management and teach
                  real-world economic skills. ClassCoin resembles an online
                  banking system, where students apply for classroom jobs, earn
                  paychecks, pay rent, receive bonuses and fines, create
                  budgeting goals, and use their savings to buy classroom
                  rewards. We streamline the process for the teacher, making
                  classroom management and financial literacy easier, more
                  engaging, and more effective.{' '}
                </p>
                <h3>Sounds sweet! How does it work?</h3>
              </section>

              <section className="details-info">
                <div className="details-heading-description">
                  <h4>Classroom Jobs & Salaries</h4>
                  <img
                    src="../../images/jobs-and-salaries.png"
                    alt="jobs and salaries photo"
                    className="dashboard-details-photo"
                  />
                </div>
                <p>
                  Choose classroom jobs, responsibilities, and corresponding
                  salaries with ClassCoin’s suggested list, or customize your
                  own. Students apply for their top choices, resembling the
                  real-world job application process. ClassCoin allows teachers
                  to easily view applications and assign jobs, taking the time
                  burden out of manually sorting and matching student choices.
                  Students take responsibility for managing class routines and
                  earn salaries for their hard work.{' '}
                </p>
              </section>

              <section className="details-info">
                <div className="details-heading-description">
                  <h4>Rent</h4>
                  <img
                    src="../../images/rent.png"
                    alt="rent photo"
                    className="dashboard-details-photo"
                  />
                </div>
                <p>
                  Students are responsible for paying rent for their desk,
                  creating a sense of ownership for classroom space. Teachers
                  may use ClassCoin’s suggested amount and frequency, or choose
                  their own. Students will get a notification when rent is due,
                  will digitally write a check to withdraw the correct amount,
                  and calculate their new account balance. Students may save up
                  to buy their desk and no longer pay rent, or they may even
                  save up to buy a classmate’s desk to become their landlord.
                </p>
              </section>

              <section className="details-info">
                <div className="details-heading-description">
                  <h4>Bonuses & Fines</h4>
                  <img
                    src="../../images/bonuses-and-fines.png"
                    alt="bonsues and fines photo"
                    className="dashboard-details-photo"
                  />
                </div>
                <p>
                  Incentivize positive classroom behavior through a system of
                  bonuses and fines. When a student receives a bonus or a fine,
                  they will receive a notification that allows them to deposit
                  or withdraw the amount and calculate their new account
                  balance. When fined, students will also have the opportunity
                  to complete behavioral reflection questions. This allows
                  teachers to reinforce classroom management and promote a
                  positive classroom culture.
                </p>
              </section>

              <section className="details-info">
                <div className="details-heading-description">
                  <h4>Rewards & Badges</h4>
                  <img
                    src="../../images/rewards-and-badges.png"
                    alt="rewards and badges photo"
                    className="dashboard-details-photo"
                  />
                </div>
                <p>
                  Students learn to budget, set goals, and use their savings to
                  purchase rewards from the classroom store. Teachers may use
                  ClassCoin’s suggested rewards and prices, or create their own.
                  Students may also earn badges by completing financial literacy
                  challenges and practicing real-world skills.
                </p>
              </section>

              <section className="get-started">
                <h3>I'm in! How do I get started?</h3>
                <div className="numbers">
                  <div>
                    <img
                      src="../../images/1.png"
                      alt="1"
                      className="dashboard-number-photo"
                    />
                    <h4>Create an account</h4>
                  </div>
                  <div>
                    <img
                      src="../../images/2.png"
                      alt="2"
                      className="dashboard-number-photo"
                    />
                    <h4>Set up your classroom</h4>
                  </div>
                  <div>
                    <img
                      src="../../images/3.png"
                      alt="3"
                      className="dashboard-number-photo"
                    />
                    <h4>Enjoy!<br/></h4>
                  </div>
                </div>
              </section>
            </div>
          </>
        )}

        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </>
    );
  }
}

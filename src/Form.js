import React from "react";
import { Button, Icon, Row } from 'react-materialize';
import ReactDataGrid from 'react-data-grid';
import { Container, Col } from 'reactstrap';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default class Form extends React.Component {
  state = {
    usn: "", name: "", stream: "", branch: "", currentSem: "", batch: "", mobile: "", DOB: "", gender: "",
    fatherName: "", fatherOccupation: "", fatherAge: "", fatherIncome: "", fatherMobile: "", incomeClaim: "",
    motherName: "", motherOccupation: "", motherAge: "", motherIncome: "", motherMobile: "",
    gaurdianName: "", gaurdianOccupation: "", gaurdianAge: "", gaurdianMobile: "",
    firstName: "", middleName: "", lastName: "", religion: "", caste: "", subCaste: "", blood: "", nationality: "", motherTongue: "", area: "", email: "", currentAddress: "", currentCity: "", currentState: "", country: "", pinCode: "", permAddress: "", permCity: "", permState: "", permCountry: "", permPincode: "", phone: "", emergencyContact: "", birthPlace: "", birthState: "", birthCountry: "", disability: "", disableType: "", backward: "", adharCard: "", siblings: "", entranceExam: "", admissionDate: "", schoolName: "", schoolBoard: "", schoolTown: "", schoolState: "", schoolRegNO: "", schoolPassYear: "", schoolMarkscardNo: "", schoolMedium: "", schoolMaxMarks: "", schoolMarks: "", schoolAggregate: "", collegeName: "", collegeBoard: "", collegeTown: "", collegeState: "", collegeCountry: "", collegePassYear: "", collegeRegNo: "", collegeMaxMarks: "", collegeMarks: "", collegeAggregate: "", collegeMarkscardNo: "", collegeMedium: "", attempts: "", sub1MaxMarks: "", sub2MaxMarks: "", sub3MaxMarks: "", sub1Marks: "", sub2Marks: "", sub3Marks: ""

  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      usn: "", name: "", stream: "", branch: "", currentSem: "", batch: "", mobile: "", DOB: "", gender: "",
      fatherName: "", fatherOccupation: "", fatherAge: "", fatherIncome: "", fatherMobile: "", incomeClaim: "",
      motherName: "", motherOccupation: "", motherAge: "", motherIncome: "", motherMobile: "",
      gaurdianName: "", gaurdianOccupation: "", gaurdianAge: "", gaurdianMobile: "",
      firstName: "", middleName: "", lastName: "", religion: "", caste: "", subCaste: "", blood: "", nationality: "", motherTongue: "", area: "", email: "", currentAddress: "", currentCity: "", currentState: "", country: "", pinCode: "", permAddress: "", permCity: "", permState: "", permCountry: "", permPincode: "", phone: "", emergencyContact: "", birthPlace: "", birthState: "", birthCountry: "", disability: "", disableType: "", backward: "", adharCard: "", siblings: "", entranceExam: "", admissionDate: "", schoolName: "", schoolBoard: "", schoolTown: "", schoolState: "", schoolRegNO: "", schoolPassYear: "", schoolMarkscardNo: "", schoolMedium: "", schoolMaxMarks: "", schoolMarks: "", schoolAggregate: "", collegeName: "", collegeBoard: "", collegeTown: "", collegeState: "", collegeCountry: "", collegePassYear: "", collegeRegNo: "", collegeMaxMarks: "", collegeMarks: "", collegeAggregate: "", collegeMarkscardNo: "", collegeMedium: "", attempts: "", sub1MaxMarks: "", sub2MaxMarks: "", sub3MaxMarks: "", sub1Marks: "", sub2Marks: "", sub3Marks: ""
    });
    this.props.onChange({
      usn: "", name: "", stream: "", branch: "", currentSem: "", batch: "", mobile: "", DOB: "", gender: "",
      fatherName: "", fatherOccupation: "", fatherAge: "", fatherIncome: "", fatherMobile: "", incomeClaim: "",
      motherName: "", motherOccupation: "", motherAge: "", motherIncome: "", motherMobile: "",
      gaurdianName: "", gaurdianOccupation: "", gaurdianAge: "", gaurdianMobile: "",
      firstName: "", middleName: "", lastName: "", religion: "", caste: "", subCaste: "", blood: "", nationality: "", motherTongue: "", area: "", email: "", currentAddress: "", currentCity: "", currentState: "", country: "", pinCode: "", permAddress: "", permCity: "", permState: "", permCountry: "", permPincode: "", phone: "", emergencyContact: "", birthPlace: "", birthState: "", birthCountry: "", disability: "", disableType: "", backward: "", adharCard: "", siblings: "", entranceExam: "", admissionDate: "", schoolName: "", schoolBoard: "", schoolTown: "", schoolState: "", schoolRegNO: "", schoolPassYear: "", schoolMarkscardNo: "", schoolMedium: "", schoolMaxMarks: "", schoolMarks: "", schoolAggregate: "", collegeName: "", collegeBoard: "", collegeTown: "", collegeState: "", collegeCountry: "", collegePassYear: "", collegeRegNo: "", collegeMaxMarks: "", collegeMarks: "", collegeAggregate: "", collegeMarkscardNo: "", collegeMedium: "", attempts: "", sub1MaxMarks: "", sub2MaxMarks: "", sub3MaxMarks: "", sub1Marks: "", sub2Marks: "", sub3Marks: ""
    });
  };

  render() {

    return (

      <form>



        <div class="container">

          <div class="col s6"><h1>STUDENT DETAILS</h1></div>
          <input
            name="usn"

            placeholder="USN"
            value={this.state.usn}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="name"

            placeholder="Name"
            value={this.state.name}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="stream"

            placeholder="Stream"
            value={this.state.stream}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="branch"

            placeholder="Branch"
            value={this.state.branch}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="currentSem"
            type="Number"
            placeholder="Current Sem"
            value={this.state.currentSem}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="batch"

            placeholder="Batch"
            value={this.state.batch}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="mobile"
            type="Number"
            placeholder="Mobile"
            value={this.state.mobile}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="DOB"

            placeholder="DOB"
            value={this.state.DOB}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="gender"

            placeholder="Gender"
            value={this.state.gender}
            onChange={e => this.change(e)}
          />

          <br />
        </div>

        <div class="container">

          <h1>PARENT DETAILS</h1>
          <input
            name="fatherName"

            placeholder="Father Name"
            value={this.state.fatherName}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="fatherOccupation"

            placeholder="Father Occupation"
            value={this.state.fatherOccupation}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="fatherAge"

            placeholder="Father Age"
            value={this.state.fatherAge}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="fatherIncome"

            placeholder="Father Income"
            value={this.state.fatherIncome}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="fatherMobile"
            type="Number"
            placeholder="Father Mobile"
            value={this.state.fatherMobile}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="incomeClaim"

            placeholder="Income Claim"
            value={this.state.incomeClaim}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="motherName"
            type="Number"
            placeholder="Mother Name"
            value={this.state.motherName}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="motherOccupation"

            placeholder="Mother Occupation"
            value={this.state.motherOccupation}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="motherAge"

            placeholder="Mother Age"
            value={this.state.motherAge}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="motherIncome"

            placeholder="Mother Income"
            value={this.state.motherIncome}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="motherMobile"

            placeholder="Mother Mobile"
            value={this.state.motherMobile}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="gaurdianName"

            placeholder="Gaurdian Name"
            value={this.state.gaurdianName}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="gaurdianOccupation"

            placeholder="Gaurdian Occupation"
            value={this.state.gaurdianOccupation}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="gaurdianAge"

            placeholder="Gaurdian Age"
            value={this.state.gaurdianAge}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="gaurdianMobile"

            placeholder="Gaurdian Mobile"
            value={this.state.gaurdianMobile}
            onChange={e => this.change(e)}
          />

          <br />

        </div>
        <div class="container">

          <h1>STUDENT PERSONAL DETAILS</h1>
          <input
            name="firstName"

            placeholder="First Name"
            value={this.state.firstName}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="middleName"

            placeholder="Middle Name"
            value={this.state.middleName}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="lastName"

            placeholder="Last Name"
            value={this.state.lastName}
            onChange={e => this.change(e)}
          />

          <br />



          <input
            name="religion"

            placeholder="Religion"
            value={this.state.religion}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="caste"

            placeholder="Caste"
            value={this.state.caste}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="subCaste"

            placeholder="Sub Caste"
            value={this.state.subCaste}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="blood"

            placeholder="Blood"
            value={this.state.blood}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="nationality"

            placeholder="Nationality"
            value={this.state.nationality}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="motherTongue"

            placeholder="Mother Tongue"
            value={this.state.motherTongue}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="area"

            placeholder="Area"
            value={this.state.area}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="email"

            placeholder="Email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="currentAddress"

            placeholder="Current Address"
            value={this.state.currentAddress}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="currentCity"

            placeholder="Current City"
            value={this.state.currentCity}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="currentState"

            placeholder="Current State"
            value={this.state.currentState}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="country"

            placeholder="Country"
            value={this.state.country}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="pinCode"

            placeholder="Pin Code"
            value={this.state.pinCode}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="permAddress"

            placeholder="Perm Address"
            value={this.state.permAddress}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="permCity"

            placeholder="Perm City"
            value={this.state.permCity}
            onChange={e => this.change(e)}
          />

          <br />



          <input
            name="permState"

            placeholder="Perm State"
            value={this.state.permState}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="permCountry"

            placeholder="Perm Country"
            value={this.state.permCountry}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="permPinCode"

            placeholder="Perm Pin Code"
            value={this.state.permPincode}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="phone"

            placeholder="Phone"
            value={this.state.phone}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="emergencyContact"

            placeholder="Emergency Contact"
            value={this.state.emergencyContact}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="birthPlace"

            placeholder="Birth Place"
            value={this.state.birthPlace}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="birthState"

            placeholder="Birth State"
            value={this.state.birthState}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="birthCountry"

            placeholder="Birth Country"
            value={this.state.birthCountry}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="disability"

            placeholder="Disability"
            value={this.state.disability}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="disableType"

            placeholder="Disable Type"
            value={this.state.disableType}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="backward"

            placeholder="Backward"
            value={this.state.backward}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="adharCard"

            placeholder="Adhar Card"
            value={this.state.adharCard}
            onChange={e => this.change(e)}
          />

          <br />

          <input
            name="siblings"

            placeholder="Siblings"
            value={this.state.siblings}
            onChange={e => this.change(e)}
          />

          <br />

          <div class="container">

            <h1>ADMISSION DETAILS</h1>
            <input
              name="entranceExam"

              placeholder="Entrance Exam"
              value={this.state.entranceExam}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="admissionDate"

              placeholder="Admission Date"
              value={this.state.admissionDate}
              onChange={e => this.change(e)}
            />

            <br />
          </div>


        </div>
        <div class="container">

          <h1>ACADEMIC HISTORY</h1>
          <div>
            <h2>SCHOOL</h2>
            <input
              name="schoolName"

              placeholder="School Name"
              value={this.state.schoolName}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="schoolBoard"

              placeholder="School Board"
              value={this.state.schoolBoard}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="schoolTown"

              placeholder="School Town"
              value={this.state.schoolTown}
              onChange={e => this.change(e)}
            />

            <br />



            <input
              name="schoolState"

              placeholder="School State"
              value={this.state.schoolState}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="schoolRegNo"

              placeholder="School RegNo"
              value={this.state.schoolRegNO}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="schoolPassYear"

              placeholder="School Pass Year"
              value={this.state.schoolPassYear}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="schoolMarkscardNo"

              placeholder="School Marks CardNo"
              value={this.state.schoolMarkscardNo}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="schoolMedium"

              placeholder="School Medium"
              value={this.state.schoolMedium}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="schoolMaxMarks"

              placeholder="School Max Marks"
              value={this.state.schoolMaxMarks}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="schoolMarks"

              placeholder="School Marks"
              value={this.state.schoolMarks}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="schoolAggregate"

              placeholder="School Aggregate"
              value={this.state.schoolAggregate}
              onChange={e => this.change(e)}
            />

            <br />
          </div>
          <div>
            <h2>PUC</h2>


            <input
              name="collegeName"

              placeholder="College Name"
              value={this.state.collegeName}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="collegeBoard"

              placeholder="College Board"
              value={this.state.collegeBoard}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="collegeTown"

              placeholder="College Town"
              value={this.state.collegeTown}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="collegeState"

              placeholder="College State"
              value={this.state.collegeState}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="collegeCountry"

              placeholder="College Country"
              value={this.state.collegeCountry}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="collegePassYear"

              placeholder="College Pass Year"
              value={this.state.collegePassYear}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="collegeRegNo"

              placeholder="College RegNo"
              value={this.state.collegeRegNo}
              onChange={e => this.change(e)}
            />

            <br />



            <input
              name="collegeMaxMarks"

              placeholder="College Max Marks"
              value={this.state.collegeMaxMarks}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="collegeMarks"

              placeholder="College Marks"
              value={this.state.collegeMarks}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="collegeAggregate"

              placeholder="College Aggregate"
              value={this.state.collegeAggregate}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="collegeMarkscardNo"

              placeholder="College MarkscardNo"
              value={this.state.collegeMarkscardNo}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="collegeMedium"

              placeholder="College Medium"
              value={this.state.collegeMedium}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="attempts"

              placeholder="Attempts"
              value={this.state.attempts}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="sub1MaxMarks"

              placeholder="Sub1 Max Marks"
              value={this.state.sub1MaxMarks}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="sub2MaxMarks"

              placeholder="Sub2 Max Marks"
              value={this.state.sub2MaxMarks}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="sub3MaxMarks"

              placeholder="Sub3 Max Marks"
              value={this.state.sub3MaxMarks}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="sub1Marks"

              placeholder="Sub1 Marks"
              value={this.state.sub1Marks}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="sub2Marks"

              placeholder="Sub2 Marks"
              value={this.state.sub2Marks}
              onChange={e => this.change(e)}
            />

            <br />

            <input
              name="sub3Marks"

              placeholder="Sub3 Marks"
              value={this.state.sub3Marks}
              onChange={e => this.change(e)}
            />

            <br />
          </div>

        </div>


        <Button waves='light'>
          <Icon>SUBMIT</Icon>
        </Button>


      </form >
    );
  }
}

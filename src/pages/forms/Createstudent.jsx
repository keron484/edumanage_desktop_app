import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { EmailInput, FieldOfStudyInput, AddressInput, CityInput, YearsExperienceInput,  FullNamesInput, PhoneNumberInput, SalaryInput, CulturalBackgroundInput, ReligionInput, FirstNameInput, LastNameInput } from "../../components/formComponents";
import { CustomDropdownTwo } from "../../components/Dropdowns";
import DatePicker from "../../components/datePicker";
function Createstudent(){
    const qualifications = [
        { code: "BACHELORS", name: "Bachelor's Degree" },
        { code: "MASTERS", name: "Master's Degree" },
        { code: "PHD", name: "Doctoral Degree (PhD)" },
        { code: "ASSOCIATE", name: "Associate Degree" },
        { code: "DIPLOMA", name: "Diploma" },
        { code: "CERTIFICATE", name: "Certificate" },
        { code: "HIGH_SCHOOL", name: "High School Diploma" },
        { code: "GCSE", name: "General Certificate of Secondary Education (GCSE)" },
        { code: "A_LEVEL", name: "Advanced Level (A-Level)" },
        { code: "HND", name: "Higher National Diploma (HND)" },
        { code: "APR", name: "Apprentiship" },
      ];
      const jobTypes = [
        { code: "FULL_TIME", name: "Full-time" },
        { code: "PART_TIME", name: "Part-time" },
        { code: "CONTRACT", name: "Contract" },
        { code: "TEMPORARY", name: "Temporary" },
        { code: "FREELANCE", name: "Freelance" },
        { code: "INTERN", name: "Internship" },
        { code: "REMOTE", name: "Remote" },
        { code: "ON_SITE", name: "On-site" },
        { code: "SHIFT", name: "Shift Work" },
        { code: "FLEXIBLE", name: "Flexible" },
        { code: "PER_DIEM", name: "Per Diem" },
        { code: "COMMISSION", name: "Commission-based" },
        { code: "SEASONAL", name: "Seasonal" },
        { code: "VOLUNTEER", name: "Volunteer" },
        { code: "CASUAL", name: "Casual" },
        { code: "TEMP_TO_PERM", name: "Temp-to-Perm" },
        { code: "REMOTE_PART_TIME", name: "Remote Part-time" },
        { code: "REMOTE_FULL_TIME", name: "Remote Full-time" },
        { code: "FIXED_TERM", name: "Fixed-term" },
        { code: "CONSULTANT", name: "Consultant" },
        { code: "OUTSOURCED", name: "Outsourced" },
        { code: "JOB_SHARING", name: "Job Sharing" },
      ];
      const sexOptions = [
        { code: "MALE", name: "Male" },
        { code: "FEMALE", name: "Female" },
        { code: "NON_BINARY", name: "Non-Binary" },
        { code: "TRANSGENDER_MALE", name: "Transgender Male" },
        { code: "TRANSGENDER_FEMALE", name: "Transgender Female" },
        { code: "GENDER_FLUID", name: "Gender Fluid" },
        { code: "AGENDER", name: "Agender" },
        { code: "BIGENDER", name: "Bigender" },
        { code: "TWO_SPIRIT", name: "Two-Spirit" },
        { code: "INTERSEX", name: "Intersex" },
        { code: "PREFER_NOT_TO_SAY", name: "Prefer not to say" },
      ];
      const navigate = useNavigate();
    return(
        <>
        <div className="d-flex flex-row justify-content-between w-100  align-items-center my-2">
        <div className="d-flex flex-row align-items-center gap-2">
          <div className="badge-input d-flex flex-row align-items-center justify-content-center">
            <Icon
              icon="clarity:administrator-line"
              className="fs-3 color-primary"
            />
          </div>
          <p className="my-0 fs-6 fw-semibold">Add New Student</p>
        </div>
        <div>
          <button
            className="border-none rounded-2 font-size-sm p-2 px-4 d-flex flex-row gap-4 primary-background text-white"
            onClick={() => {
              navigate("/students");
            }}
          >
            <span>Back</span>
          </button>
        </div>
      </div>
      <div className="w-100">
        <div className="card w-100 rounded-4 py-2 px-3">
          <div className="heading my-1">
            <h5 className="text-center">Create New Teachers</h5>
          </div>
          <div className="my-1">
            <div className="d-flex flex-row gap-2 w-100 my-1">
                <div className="w-50">
                    <FirstNameInput />
                </div>
                <div className="w-50">
                    <LastNameInput />
                </div>
            </div>
            <div className="d-flex flex-row gap-2 w-100 my-1">
                <div className="w-50">
                    <FullNamesInput />
                </div>
                <div className="w-50">
                    <EmailInput />
                </div>
            </div>
            <div className="d-flex flex-row gap-2 w-100 my-1">
                <div className="w-50">
                    <PhoneNumberInput />
                </div>
                <div className="w-50">
                    <PhoneNumberInput />
                </div>
            </div>
            <div className="d-flex flex-row gap-2 w-100 my-1">
                <div className="w-50">
                    <DatePicker 
                     lable={"Date of Birth"}
                    />
                </div>
                <div className="w-50">
                    <CustomDropdownTwo 
                      data={sexOptions}
                      displayKey={['name']}
                      valueKey={['name']}
                      direction="up"
                      lable={"Gender"}
                    />
                </div>
            </div>
            <div className="d-flex flex-row align-items-center my-1 gap-2">
            <div className="w-50">
              <CulturalBackgroundInput />
            </div>
            <div className="w-50">
              <ReligionInput />
            </div>
          </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Createstudent;
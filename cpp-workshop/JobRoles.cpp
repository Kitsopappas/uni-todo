#include <vector>
#include "Company.h"

std::vector<HR::Job> jobRolesArray{
    {"Cpp developer",
     HR::JobLevel::Entry,
     {"Cpp, Git, Jira"},
     "Ioannina",
     "Are you passionate about coding? Do you thrive in collaborative environments?\nLove a challenge—and maybe even enjoy some grilled provatina? "
     " \nJoin our dynamic team and take the next step in your career.\nApply today and become part of something amazing!"},

    {"Java developer",
     HR::JobLevel::Mid,
     {"Java, gradle, spring, Git, Jira"},
     "Porto",
     "Apply Now!"},

    {"Python developer",
     HR::JobLevel::Senior,
     {"Python, Git, Jira"},
     "Berlin",
     "Apply Now!"},

    {"UI developer",
     HR::JobLevel::Mid,
     {"React"},
     "Athens",
     "Apply Now!"},

    {"Designer",
     HR::JobLevel::Entry,
     {"Figma"},
     "Barcelona",
     "Apply Now!"},

    {"Backend developer",
     HR::JobLevel::Intern,
     {"C#, Git, Jira"},
     "Paris",
     "Apply Now!"},

    {"Backend developer",
     HR::JobLevel::Senior,
     {"C#, Git, Jira"},
     "London",
     "Apply Now!"}
};

void CreateJobRole(Company& company, int numOfJobRoles)
{
    for (auto i = 0; i < numOfJobRoles; ++i)
    {
        company.CreateJobRole(jobRolesArray[i]);
    }
}
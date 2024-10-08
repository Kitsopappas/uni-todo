#include <iostream>
#include "Company.h"
#include "Engineer.h"
#include "JobRoles.h"
 
int main() 
{
    //version 1
    auto hr = HR::HR_department();
    hr.welcomePeople();

    //version 2
    //Create companies
    Company TeamViewer("TeamViewer");
    Company Google("Google");
    Company Microsoft("Microsoft");
    Company Amazon("Amazon");
    
    Engineer applicant_1("Geek");
    Engineer applicant_2("Nerd");
    Engineer applicant_3("Psh");

    //Apply to interesting companies
    applicant_1.Subscribe(TeamViewer);
    applicant_1.Subscribe(Google);

    applicant_2.Subscribe(TeamViewer);
    applicant_2.Subscribe(Microsoft);
    applicant_2.Subscribe(Amazon);

    applicant_3.Subscribe(TeamViewer);
    applicant_3.Subscribe(Amazon);
    applicant_3.Subscribe(Google);

    //Companies start create and publish Job Roles
    TeamViewer.CreateJobRole(
        {"Cpp developer",
         HR::JobLevel::Entry,
         {"Cpp, Git, Jira"},
         "Ioannina",
         "Are you passionate about coding? Do you thrive in collaborative environments?\nLove a challenge—and maybe even enjoy some grilled provatina? "
         " \nJoin our dynamic team and take the next step in your career.\nApply today and become part of something amazing!"});

        return 0;
}

void CreateJobRole(Company& company, int numOfJobRoles)
{
    for (auto i = 1; i <= numOfJobRoles; ++i)
    {
        company.CreateJobRole()
    }
}
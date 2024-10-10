#include "Company/Company.h"
#include "Company/HR_department.h"
#include "JobPositions.cpp"
#include "Observers/Engineer.h"
#include "Observers/Recruiter.h"
#include <iostream>
#include <memory>

int main()
{
	auto hr_TV = std::make_shared<HR::HR_department>();
	auto hr_G = std::make_shared<HR::HR_department>();
	auto hr_M = std::make_shared<HR::HR_department>();
	auto hr_A = std::make_shared<HR::HR_department>();

	// Create companies
	Company TeamViewer("TeamViewer", hr_TV);
	Company Google("Google", hr_G);
	Company Microsoft("Microsoft", hr_M);
	Company Amazon("Amazon", hr_A);

	// Create applicants
	auto applicant_1 = std::make_shared<Engineer>("Geek");
	auto applicant_2 = std::make_shared<Engineer>("Nerd");
	auto applicant_3 = std::make_shared<Engineer>("Dev");

	auto applicant_4 = std::make_shared<Recruiter>("Davit");
	auto applicant_5 = std::make_shared<Recruiter>("Zlatozara");

	// Subscribe to interesting companies
	applicant_1->SubscribeForJobPositions(TeamViewer);
	applicant_1->SubscribeForJobPositions(Google);

	applicant_2->SubscribeForJobPositions(TeamViewer);
	applicant_2->SubscribeForJobPositions(Microsoft);
	applicant_2->SubscribeForJobPositions(Amazon);

	applicant_3->SubscribeForJobPositions(TeamViewer);
	applicant_3->SubscribeForJobPositions(Amazon);
	applicant_3->SubscribeForJobPositions(Google);

	applicant_4->SubscribeForJobPositions(TeamViewer);

	applicant_5->SubscribeForJobPositions(TeamViewer);

	// Companies start creating Job Positions
	CreateJobPositions(TeamViewer, 3);
	CreateJobPositions(Google, 4);
	CreateJobPositions(Microsoft, 2);
	CreateJobPositions(Amazon, 1);

	// Companies publish their jobs
	TeamViewer.PublishJobs();
	Google.PublishJobs();
	Microsoft.PublishJobs();
	Amazon.PublishJobs();

	// Delete applications
	applicant_1->UnsubscribeForJobPositions(Google);
	applicant_2->UnsubscribeForJobPositions(TeamViewer);
	applicant_2->UnsubscribeForJobPositions(Microsoft);

	// Companies publish their jobs
	TeamViewer.PublishJobs();
	Google.PublishJobs();
	Microsoft.PublishJobs();
	Amazon.PublishJobs();

	return 0;
}

#include <iostream>
#include "HR_department.h"
#include "IObserver.h"
#include "Company.h"

void PrintJob(const HR::Job job)
{
    std::cout << "Title: " << job.title << std::endl
              << "Level: " << job.level << std::endl
              << "Skills: " ;
    for( auto&  i: job.skills)  {
        std::cout << i << ", " << std::endl;
    }
    std::cout << "Location: " << job.location << std::endl
              << "Description: " << job.description << std::endl;
}

Company::Company(std::string companyName, std::shared_ptr<HR::HR_department>& hr): m_companyName(companyName), m_HR(hr) {}

void Company::WelcomePeople()
{
    m_HR->WelcomePeople();
}

void Company::Subscribe(const std::shared_ptr<IObserver>& cObserver)
{
    m_HR->Subscribe(cObserver);
    std::cout << "Company Observer " << cObserver->GetName() << ", applied to " << m_companyName << std::endl;
}

void Company::Unsubscribe(const std::shared_ptr<IObserver>& cObserver)
{
    m_HR->Unsubscribe(cObserver);
}

void Company::CreateJobPosition(const HR::Job newJob)
{
    m_HR->StoreJobPosition(newJob);
    std::cout << GetName() << " opened a new Job Position!" << std::endl;
    PrintJob(newJob);
    std::cout << std::endl;
}

void Company::PublishJobs()
{
    std::cout << "New Job Positions from " << GetName() << std::endl;
    m_HR->NotifySubscribes(); 
}

std::string Company::GetName()
{
    return m_companyName;
}
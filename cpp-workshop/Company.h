#pragma once
#include <memory>

//Forward declarations
namespace HR{
    struct Job;
    class HR_department;
}
class IObserver;
class ISubject;

class Company
{ 
public: 
    Company(std::string companyName, std::shared_ptr<HR::HR_department>& hr);
    ~Company() = default;
    void WelcomePeople();
    void Subscribe(const std::shared_ptr<IObserver>& cObserver);
    void Unsubscribe(const std::shared_ptr<IObserver>& cObserver);
    void CreateJobPosition(HR::Job newJob);
    void PublishJobs();
    std::string GetName(); 
 
private:
    std::string m_companyName;

    std::shared_ptr<HR::HR_department>& m_HR;
};


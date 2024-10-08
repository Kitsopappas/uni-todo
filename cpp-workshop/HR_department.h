#pragma once
#include <vector>
#include "Subject.h"
 
namespace HR
{
    enum JobLevel
    {
        Intern,
        Entry,
        Junior,
        Mid,
        Senior
    };

    struct Job
    {
        std::string title;
        JobLevel level;
        std::vector<std::string> skills;
        std::string location;
        std::string description;
    };

    class HR_department: public Subject
    {
    public:
        HR_department() = default;
        ~HR_department() = default;

        void WelcomePeople();
        void StoreJobPosition(const Job newJob);

    private:
        std::vector<Job> m_jobPositions;
    };

} // HR_department
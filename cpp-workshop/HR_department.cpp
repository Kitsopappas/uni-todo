#include <iostream>
#include "HR_department.h"

namespace HR
{
void HR_department::WelcomePeople()
{
    std::cout << "Hello people. Welcome to TeamViewer R&D department in Ioannina!" << std::endl;
}

void HR_department::StoreJobPosition(const Job newJob)
{
    m_jobPositions.push_back(newJob);
}
} // HR_department

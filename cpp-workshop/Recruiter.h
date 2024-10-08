#pragma once
#include <iostream>
#include "CompanyObserver.h"

class Recruiter : public CompanyObserver
{
public:
    Recruiter(std::string name) : CompanyObserver(name) {};
    void Update() override;
};
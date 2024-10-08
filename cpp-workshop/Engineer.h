#pragma once
#include <iostream>
#include "CompanyObserver.h"

class Engineer : public CompanyObserver
{
public:
    Engineer(std::string name) : CompanyObserver(name) {};
    void Update() override;
};
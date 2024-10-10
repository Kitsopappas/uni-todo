#pragma once
#include "CompanyObserver.h"
#include <iostream>

class Recruiter : public CompanyObserver
{
public:
	Recruiter(std::string name)
		: CompanyObserver(name) {};
	void Update() override;
};
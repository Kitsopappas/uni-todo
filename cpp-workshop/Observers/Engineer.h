#pragma once
#include "CompanyObserver.h"
#include <iostream>

class Engineer : public CompanyObserver
{
public:
	Engineer(std::string name)
		: CompanyObserver(name) {};
	void Update() override;
};
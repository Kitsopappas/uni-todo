#pragma once
#include "Observer_Pattern/Observer.h"

class Company;

class CompanyObserver : public Observer
{
public:
	CompanyObserver(std::string name);
	~CompanyObserver();

	virtual void SubscribeForJobPositions(Company& company);
	virtual void UnsubscribeForJobPositions(Company& company);
	virtual void Update() override;
};
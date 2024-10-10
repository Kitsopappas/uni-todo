#pragma once
#include "IObserver.h"
#include <iostream>

class Observer : public IObserver
{
public:
	Observer(std::string name);
	virtual ~Observer();
	virtual void Update() override;
	virtual std::string GetName() override;

private:
	std::string m_name;
};